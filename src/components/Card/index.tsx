import Image from "next/image"

import "./card.css"
import SmartLink from "../SmartLink"

const Card = ({ heading, title, link, image, overlay_image }: Card) => {
  var card_component = (
    <div className="card h-100 grow use-color-text">
      <div className="aspect-video grid">
        {(image || overlay_image) ? (
          <>
            {image && image.path && (
              <Image
                src={image.path}
                alt={image.alt}
                fill={true}
                className="row-span-full col-span-full"
              />
            )}
            {overlay_image && overlay_image.path && (
              <div className="row-span-full col-span-full overflow-hidden p-4 grid items-center">
                {/* I spent a while to figure out that the combination of:
                    - parent div: overflow-hidden
                    - child div: max-h-full
                    - child img: scale-down
                    will resize the image in a nice way... I have no idea
                    how it works.*/}
                  <Image
                    src={overlay_image.path}
                    alt={overlay_image.alt}
                    fill={true}
                    className="max-h-full object-scale-down"
                    style={{objectFit: "scale-down"}}
                  />
              </div>
            )}
          </>
        ) : (
          <Image
            src="./placeholder.png"
            alt="Placeholder image"
            fill={true}
          />
        )}
      </div>
      {(title || heading) && (
        <div className="p-2">
          {heading && (
            <p className="line-clamp-1 leading-4 m-0 font-mono font-size-small">
              {heading}
            </p>
          )}
          {title && (
            <p className="line-clamp-2 leading-5 mb-1">
              {title}
            </p>
          )}
        </div>
      )}
    </div>
  )
  if (link) {
    return (
      <SmartLink href={link} className="card-hover flex grow">
        {card_component}
      </SmartLink>
    )
  }
  return (
    <div className="flex-grow">
      {card_component}
    </div>
  )
}

export default Card