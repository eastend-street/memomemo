import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const StyledCard = styled(Card)`
  height: 100%;
`;

const StyledCardMedia = styled(CardMedia)`
  && {
    min-height: 10rem;
    object-fit: contain;
  }
`;

const Title = styled(Typography)`
  && {
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    min-height: 4.5rem;
  }
`;

const Memo = styled(Typography)`
  && {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 0.5rem 1rem;
  }
`;

const StyledHr = styled.hr`
  border: 0.05rem solid #f5f5f5;
  margin: 0rem 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const GridActions = styled(Grid)`
  && {
    padding: 0rem 0.5rem 1rem;
  }
`;

const ActionButton = styled(Button)`
  && {
    text-transform: none;
    padding: 0;
    color: #757575;
  }
`;

class BookmarkCard extends Component {
  render() {
    return (
      <StyledCard>
        <CardActionArea target="_blank" href={this.props.bookmark.url}>
          <StyledCardMedia
            image={this.props.bookmark.img_url}
            title={this.props.bookmark.title}
          />
          <CardContent>
            <Title variant="subheading">{this.props.bookmark.title}</Title>
          </CardContent>
        </CardActionArea>
        <StyledHr />
        <Memo variant="body1" component="p">
          {this.props.bookmark.memo}
        </Memo>
        <GridActions container>
          <Grid item>
            <StyledLink
              to={{
                pathname: "/edit/"+ this.props.bookmark.id
              }}
            >
              <ActionButton>Edit</ActionButton>
            </StyledLink>
          </Grid>
          <Grid item>
            <StyledLink to="/new">
              <ActionButton>See more</ActionButton>
            </StyledLink>
          </Grid>
        </GridActions>
      </StyledCard>
    );
  }
}

// stateの中からどの値を子コンポーネントに渡すのかを定義する。
const mapStateToProps = state => ({ bookmarks: state.bookmarks });

// const mapDispatchToProps = { readBookmarks };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(BookmarkCard);
