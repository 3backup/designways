import React from "react";

type TagButtonProps = {
  toggleTag: (tagName: string) => void,
  tagName: string,
  selected: boolean
}

export const TagButton: React.FC<TagButtonProps> = ({ toggleTag, tagName, selected }) => {
  return (
    <button className={`tag__single tagsFilter ${selected && "tag__single--active"}`} onClick={() => toggleTag(tagName)}>
      {tagName}
    </button>
  )

}