// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default function handler(req, res) {
    // console.log(req)
    // console.log(res)
    fs.readFile("blogdata/how-to-learn-flask.json",
        'utf-8',
        (err, data) => {
            console.log(JSON.parse(data));
            res.status(200).json(JSON.parse(data))
        })

}
