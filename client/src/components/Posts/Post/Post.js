import React from "react";
import useStyles from "./style";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { deletePost } from "../../../action/posts";

import { useDispatch } from "react-redux";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";

function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.card} style={{ margin: "14px" }}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />

        <div className={classes.overlay}>
          <Typography
            variant="h3"
            color="textPrimary"
            style={{ color: "white" }}
          >
            Dish {post.title}
          </Typography>
          
        </div>
   
        <CardContent className={classes.message}>
          <div  className="text-gray-400">
           Cook Time {post.message}
          </div>
          <div  className="text-gray-400">
          Dishes Served:{post.tags}
          </div>
          {/* <Typography variant="body1" color="textSecondary" component="p">
           Cook Time {post.message}
          </Typography> */}
        </CardContent>
        {/* <div className={classes.details}>
          <Typography>Tags:{post.tags}</Typography>

        </div> */}
        <div className={classes.cardActions}>
          <CardActions disableSpacing>
           
              <Button
                onClick={() => dispatch(deletePost(post._id))}
                style={{ color: "red" }}
              >
               Delete <DeleteIcon />
              </Button>
              <Button
                onClick={() => dispatch(deletePost(post._id))}
                style={{ color: "blue" }}
              >
               UPDATE <MoreHorizIcon />
              </Button>
            {/* )} */}
          </CardActions>
        </div>
      </Card>
    </>
  );
}

export default Post;
