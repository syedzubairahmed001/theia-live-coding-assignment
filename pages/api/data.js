const data = [
  {
    id: 1,
    name: "Salt Lake City No",
    src: "/a_images/IMAGE_1.jpg"
  },
  {
    id: 2,
    name: "Green Caps Are Loud",
    src: "/a_images/IMAGE_2.gif"
  },
  {
    id: 3,
    name: "Are Coloumns Round",
    src: "/a_images/IMAGE_3.gif"
  },
  {
    id: 4,
    name: "Blue Skies Are Crazy",
    src: "/a_images/IMAGE_4.png"
  },
  {
    id: 5,
    name: "Orange Velvet Lilac",
    src: "/a_images/IMAGE_5.png"
  },
  {
    id: 6,
    name: "Painters Are Innovators",
    src: "/a_images/IMAGE_6.png"
  },
  {
    id: 7,
    name: "Zoomer & Boomer",
    src: "/a_images/IMAGE_7.png"
  },
  {
    id: 8,
    name: "Who is Jason Bourne?",
    src: "/a_images/IMAGE_8.png"
  },
  {
    id: 9,
    name: "Bring it On Soldier",
    src: "/a_images/IMAGE_9.png"
  },
  {
    id: 10,
    name: "Does Lens Bloom?",
    src: "/a_images/IMAGE_10.png"
  },
  {
    id: 11,
    name: "Smiling Zebras in The Wild",
    src: "/a_images/IMAGE_11.png"
  },
  {
    id: 12,
    name: "Saber Song",
    src: "/a_images/IMAGE_12.png"
  },
];

export default function handler(req, res) {
  res.status(200).json({ data });
}
