"use client";

import { Button, Container } from "react-bootstrap";
import React, { useState } from "react";

import Custom_CARD from "../Custom_Card";
import styles from "./style.module.css";

function Story() {
  const allStories = [
    {
      id: 1,
      title:
        "2022 the year of NFTs, here’s what you need to know to stay up to date",
      Date: "22-01-2022",
      image: "/story1.png",
    },
    {
      id: 2,
      title: "Riangle redesign Version 4",
      Date: "22-12-2021",
      image: "/story2.png",
    },
    {
      id: 3,
      title: "A design system to build the web",
      Date: "21-12-2021",
      image: "/story3.png",
    },
    {
      id: 4,
      title: "Inspiration Vol. 1",
      Date: "20-12-2021",
      image: "/story4.png",
    },
    {
      id: 5,
      title: "Inspiration Vol. 1",
      Date: "20-12-2021",
      image: "/story4.png",
    },
    {
      id: 6,
      title:
        "2022 the year of NFTs, here’s what you need to know to stay up to date",
      Date: "22-01-2022",
      image: "/story1.png",
    },
    {
      id: 7,
      title:
        "2022 the year of NFTs, here’s what you need to know to stay up to date",
      Date: "22-01-2022",
      image: "/story1.png",
    },
  ];
  const [displayedStories, setDisplayedStories] = useState(
    allStories.slice(0, 4)
  );
  const storiesToShowInitially = 4;

  const loadMoreStories = () => {
    const endIndex = displayedStories.length + storiesToShowInitially;
    setDisplayedStories(allStories.slice(0, endIndex));
  };

  return (
    <Container>
      <div className={styles.Stories__container}>
        {displayedStories.map((story) => (
          <div key={story.id}>
            <Custom_CARD
              ImgSrc={story.image}
              Title={story.title}
              Date={story.Date}
            />
          </div>
        ))}
      </div>
      {displayedStories.length < allStories.length && (
        <div className={styles.Stories__LoadMoreButtonContainer}>
          <Button
            className={styles.Stories__loadMoreBtn}
            onClick={loadMoreStories}
          >
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Story;
