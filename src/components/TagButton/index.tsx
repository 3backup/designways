import React from "react";

export const TagButton = (props) => {
     return (
         <button className="tag__single tagsFilter" onClick={(e) => props.getDataSetTag(e)} data-tags={props.tagName} data-price={props.priceName} data-level={props.levelName}> {props.levelName} {props.tagName} {props.priceName}
        </button>
     )
}

