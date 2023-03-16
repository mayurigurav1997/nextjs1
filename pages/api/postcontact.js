export default function handler(req, res) {
    if (req.method === 'POST') {
        // console.log(req.body)
        res.status(200).json(req)
        // Process a POST request
    } else {
        res.status(200).json(["allBlogs"])
        // name,email,desc,phone
    }
}