// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type DataResponse = {
  title: string
  url: string
  description: string
  thumb: string
  files: {
    spreadsheet: string
    document: string
    presentation: string
    zipfile: string
  }
  type: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  res.status(200).json(
    { 
      title: 'John Doe',
      url: 'John Doe',
      description: 'John Doe',
      thumb: '',
      files: {
        spreadsheet: '',
        document: '',
        presentation: '',
        zipfile: ''
      },
      type: ''
    }
  )
}
