// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//aws config
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY
const bucketRegion = process.env.BUCKET_REGION
const bucketName = process.env.BUCKET_NAME

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey as string,
    secretAccessKey: secretAccessKey as string
  },
  region: bucketRegion as string
})

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDaJmMLBVR8BWdHtECcr1K2VxENHyWVNDI",
  authDomain: "scx-website-4373e.firebaseapp.com",
  projectId: "scx-website-4373e",
  storageBucket: "scx-website-4373e.appspot.com",
  messagingSenderId: "613425572537",
  appId: "1:613425572537:web:2921b2ee5d10b5651a4968",
  measurementId: "G-5NEM9P9GR1"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type modelInfo = {
  name: string,
  url: string,
  price: string,
  colors: string[],
  description: string,
  otherInfo: string[]
}

type Data = {
  data: modelInfo[]
}

export type { modelInfo, Data }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Promise<void>((resolve, reject) => {
    const urlsPromise: Promise<void>[] = []
    const info: modelInfo[] = []
    getDocs(collection(db, "models")) //reading from database
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {

          const params = {
            Bucket: bucketName,
            Key: `models/${doc.data().filename}`,
          }
          const command = new GetObjectCommand(params)
          urlsPromise.push(getSignedUrl(s3, command, { expiresIn: 30 })
            .then(url => {
              info.push({ name: doc.data().name, url: url, colors: doc.data().colors, price: doc.data().price ? doc.data().price : "", description: doc.data().description ? doc.data().description : "", otherInfo: doc.data().otherInfo ? doc.data().otherInfo : [""] })
            }).catch(error => {
              console.log(error)
              reject()
            })
          )
        });

        Promise.all(urlsPromise).then(() => {
          res.status(200).json({ data: info })
          // resolve()
        }).catch(error => {
          console.log(error)
          // reject()
        })

      }).catch(error => {
        console.log(error)
        reject()
      })
  })

}
