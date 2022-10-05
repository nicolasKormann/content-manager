import { Link } from "../models/link.js";


export const redirect = async (req, res, next) => {
  const title = req.params.title

  try {
    const docs = await Link.findOne({ title })

    const url = docs.url;
    res.redirect(url);
    docs.clicks++
    await docs.save();

  } catch (error) {
    res.send(error);
  }
}

export const addLink = async (req, res) => {
  const docs = new Link(req.body)

  try {
    await docs.save();
    res.redirect('/');
  } catch (error) {
    res.render('add', { error, body: req.body });
  }
}

export const allLinks = async (req, res) => {
  try {
    const docs = await Link.find({});
    res.render('all', { links: docs });
  } catch (error) {
    res.send(error);
  }
}

export const deleteLink = async (req, res) => {
  const id = req.params.id;

  try {
    await Link.findByIdAndDelete(id);
    res.send(id)
  } catch (error) {
    res.status(404).send(error);
  }
}

export const loadLink = async (req, res) => {
  const id = req.params.id;

  try {
    const doc = await Link.findById(id)
    res.render('edit', { error: false, body: doc })
  } catch (error) {
    res.status(404).send(error);
  }
}

export const editLink = async (req, res) => {
  const id = req.params.id;
  let updateDoc = req.body;

  try {
    const doc = await Link.updateOne({_id: id }, updateDoc);
    res.redirect('/');
  } catch (error) {
    res.render('edit', { error, body: req.body });
  }
}
