import Message from "./post.js"

class Controllers {
    async add(req, res) {
        try {
            const { name, author, content } = req.body;
            const message = await Message.create({ name, author, content });
            console.log(req.body);
            res.json(message);
        } catch (e) {
            res.status(500).json(e);
        }

    }
    async getAll(req, res) {
        try {
            const messages = await Message.find();
            return res.json(messages);
        } catch {
            res.status(500).json(e);
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("Error!");
            }
            const mes = await Message.findById(id);
            return res.json(mes);
        } catch {
            res.status(500).json(e);
        }
    }
    async update(req, res) {
        try {
            const mes = req.body;
            if (!mes._id) {
                res.status(400).json("Error!");
            }
            const newMes = await Message.findByIdAndUpdate(mes._id, mes, { new: true });
            return res.json(newMes);
        } catch {
            res.status(500).json(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("Error!");
            }
            const mes = await Message.findByIdAndDelete(id);
            return res.json(mes);
        } catch {
            res.status(500).json(e);
        }
    }
}



export default new Controllers();