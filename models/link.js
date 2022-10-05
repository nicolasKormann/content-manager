import mongoose from 'mongoose';

const linkSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  clicks: { type: Number, default: 0 },
});

export const Link = mongoose.model('Link', linkSchema);

const link = new Link({
  title: "portfolio",
  description: "Link para portifólio",
  url: "https://nicolaskormann.github.io/portfolio/",
});

//const doc = link.save();
