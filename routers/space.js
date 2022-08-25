const { Router } = require("express");
const User = require("../models/").user;
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

//All Spaces
router.get("/", async (req, res, next) => {
  try {
    const getSpaces = await Space.findAll();
    return res.send(getSpaces);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/:spaceId", async (req, res, next) => {
  try {
    const spaceId = req.params.spaceId;
    // const mySpace = await User.findByPk(userId, {
    //   include: { model: Space, include: [Story] },
    // });
    const oneSpace = await Space.findByPk(spaceId, {
      include: Story,
    });
    // console.log("BAckend response with user:", res.send(mySpace));
    return res.send(oneSpace);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
