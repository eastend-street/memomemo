import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import SampleImage3d5467 from "static/images/sample-#3d5467.png";
import SampleImage686963 from "static/images/sample-#686963.png";
import SampleImage8aa29e from "static/images/sample-#8aa29e.png";

const StyledCard = styled(Card)`
  && {
    box-shadow: none;
    height: 100%;
    position: relative;
    padding-bottom: 1rem;
    /* box-shadow: ${(props) => props.theme.shadow.normal}; */
  }
`;

const StyledCardMedia = styled(CardMedia)`
  && {
    height: 0;
    padding-top: 52.5%;
  }
`;

const Title = styled(Typography)`
  && {
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    min-height: 4rem;
  }
`;

const Note = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin: 0.5rem 1rem;
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
    padding: 0.5rem 1rem 0.3rem 0.5rem;
    position: absolute;
    bottom: 0;
    justify-content: flex-end;
  }
`;

const ActionButton = styled(Button)`
  && {
    text-transform: none;
    padding: 0.2rem 1rem;
    color: ${(props) => props.theme.colors.green};
    font-size: 0.8rem;
    transition: 0.5s;
  }
`;

type BookmarkCardProps = {
  bookmark: {
    created_at: Date;
    description: string;
    id: number;
    img_url: string;
    note: string;
    title: string;
    updated_at: Date;
    url: string;
    user: {};
  };
};

class BookmarkCard extends Component<BookmarkCardProps, {}> {
  render() {
    const sampleImageList = [
      SampleImage3d5467,
      SampleImage686963,
      SampleImage8aa29e,
    ];

    const randomNum = Math.floor(Math.random() * sampleImageList.length);
    return (
      <StyledCard>
        <CardActionArea target="_blank" href={this.props.bookmark.url}>
          <StyledCardMedia
            image={this.props.bookmark.img_url || sampleImageList[randomNum]}
            title={this.props.bookmark.title}
          />
          <CardContent>
            <Title variant="subtitle2">{this.props.bookmark.title}</Title>
          </CardContent>
        </CardActionArea>
        <StyledHr />
        <Note>{this.props.bookmark.note}</Note>
        <GridActions container>
          <Grid item>
            <StyledLink
              to={{
                pathname: "/detail/" + this.props.bookmark.id,
              }}
            >
              <ActionButton>See more</ActionButton>
            </StyledLink>
          </Grid>
        </GridActions>
      </StyledCard>
    );
  }
}

export default connect()(BookmarkCard);
