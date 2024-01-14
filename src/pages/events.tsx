import React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/Seo";
import { CardGrid } from "../components/Card";

interface Props {
  data: Queries.EventsPageQuery;
};

export function Head() {
  return (
    <Seo
      title="Events"
      description="Index of all SIGPwny events"
    />
  );
};

export default function EventsPage({ data }: Props) {
  const cards_uiuctf = data.all_uiuctf.events.map((event_) => ({
    card_image: event_.card_image,
    link: event_.slug,
  })) as CardProps[];
  const cards_fallctf = data.all_fallctf.events.map((event_) => ({
    card_image: event_.card_image,
    link: event_.slug,
  })) as CardProps[];
  return (
    <div className="page-width mx-auto flex flex-col gap-4">
      <div className="rounded-2xl overflow-hidden h-64 w-full bg-blue-500">
        <h1>UIUCTF</h1>
      </div>
      <div className="rounded-2xl overflow-hidden h-64 w-full bg-blue-500">
        <h1>Fall CTF</h1>
      </div>
      {/* <section id="uiuctf" className="pb-8">
        <h1>UIUCTF</h1>
        <p>
          UIUCTF is SIGPwny's premier global CTF competition.
        </p>
        <CardGrid cards={cards_uiuctf} />
      </section>
      <section id="fallctf" className="pb-8">
        <h1>Fall CTF</h1>
        <p>
          Fall CTF is a beginner-friendly CTF competition for UIUC students, 
          designed to introduce students to cybersecurity topics.
        </p>
        <CardGrid cards={cards_fallctf} />
      </section> */}
      <div className="panel md-root">
        <h2>
          What's the difference?
        </h2>
        <p>
          UIUCTF is designed to be challenging and is intended for the greater CTF and security community. Fall CTF is designed to be beginner-friendly and is intended for UIUC students.
        </p>
      </div>
    </div>
  );
};

export const query = graphql`
  query EventsPage {
    all_uiuctf: allEvent(sort: {time_start: DESC}, filter: {series: {eq: "uiuctf"}}) {
      events: nodes {
        title
        series
        time_start(formatString: "YYYY-MM-DD")
        card_image {
          foreground {
            publicURL
          }
          background {
            publicURL
          }
          foreground_image {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
          background_image {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
          background_color
          alt
        }
        slug
      }
    }
    all_fallctf: allEvent(sort: {time_start: DESC}, filter: {series: {eq: "fallctf"}}) {
      events: nodes {
        title
        series
        time_start(formatString: "YYYY-MM-DD")
        card_image {
          foreground {
            publicURL
          }
          background {
            publicURL
          }
          foreground_image {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
          background_image {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
          background_color
          alt
        }
        slug
      }
    }
  }
`;