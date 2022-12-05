import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.query.do) {
        case "register":
            res.status(200).json({
                do: "register"
            });
            break;
        case "login":
            res.status(200).json({
                do: "login"
            });
            break;
        case "newNote":
            res.status(200).json({
                do: "newNote"
            });
            break;
        case "deleteNote":
            res.status(200).json({
                do: "deleteNote"
            });
            break;
    };
};