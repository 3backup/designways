import dayjs from "dayjs";
import React from "react";
import { Workshop } from "../../types";
import { TagButton } from '../TagButton/'
import { WorkshopItem } from "../WorkshopItem";

export class Filters extends React.Component {
  state = {
    tags: [],
    level: [],
    price: [],
    sort: [],
  };
  toggleClass = (e) => {
    e.target.classList.toggle("tag__single--active");
  };

  toggleTag = (tagName: string) => {
    const tagsList = [...this.state.tags];
    const newTagsList = tagsList.includes(tagName)
      ? tagsList.filter(el => el !== tagName)
      : [...tagsList, tagName]
    this.setState({ tags: newTagsList })
  }

  getDataSetLevel = (e) => {
    const tagsList = [...this.state.tags];
    const value = e.target.dataset.level.toString();
    tagsList.includes(value)
      ? this.setState({ tags: (tagsList.filter(element => element !== value)) })
      : this.setState({ tags: [...tagsList, value] })
    this.toggleClass(e);
  }

  getDataSetPrice = (e) => {
    const tagsList = [...this.state.tags];
    const value = e.target.dataset.price.toString();
    tagsList.includes(value)
      ? this.setState({ tags: (tagsList.filter(element => element !== value)) })
      : this.setState({ tags: [...tagsList, value] })
    this.toggleClass(e);
  }


  toggleValue = (array, value,) => {
    array.includes(value)
      ? this.setState({ tags: (array.filter(element => element !== value)) })
      : this.setState({ tags: [...array, value] })
  }

  oldEvent = () => {

  }
  ongoingEvent = () => {

  }

  render() {
    const posts: Workshop[] = this.props.posts
    const levels = this.props.levels
    const tags = this.props.tags
    const oldEvents = posts.filter(post => dayjs(post.startDate).unix() < dayjs().unix())
    const onGoingEvents = posts.filter(post => dayjs(post.startDate).unix() > dayjs().unix())

    const selectedTags = this.state.tags

    const filteredWorkshops = posts.filter(post =>
      selectedTags.length ? selectedTags.filter(tag => {
        return post.tags
          .map(({ fields: { name } }) => name)
          .includes(tag);
      }).length : true
    )

    return (
      <>
        <div className="container container--xl filter__main">
          <div className="tag__container">
            <h6 className="text__h6">Wybierz tematyke</h6>
            <div className="tag__tags">
              {tags.map(({ name }) => (
                <TagButton toggleTag={this.toggleTag} tagName={name} selected={selectedTags.includes(name)} />
              ))}
            </div>
          </div>
          {/* TODO: build reusablew filtering logic */}

          {/* <div className="tag__container">
            <h6 className="text__h6">Stopień zaawansowania:</h6>
            <div className="tag__tags">

              {levels.map(level => (
                <TagButton getDataSetLevel={this.getDataSetLevel} levelName={level.name} />

              ))}
            </div>
          </div>
          <div className="tag__container">
            <h6 className="text__h6">Cena:</h6>
            <div className="tag__tags">
              <TagButton getDataSetPrice={this.getDataSetPrice} priceName={"Darmowe"} />
              <TagButton getDataSetPrice={this.getDataSetPrice} priceName={"Platne"} />
            </div>
          </div> */}
        </div>
        <div className="container container--big sortElement">
          <div className="sortElement__countEvents text__h6">Liczba znalezionych wydarzeń:  <span id="eventNumber">{filteredWorkshops.length}</span>
          </div>
          <div className="sortElement__sortButtonContainer">
            <button className="sortSettingsTrue sortElement__sortButton  text__h6 {}">Cena: Rosnąco</button>
            <button className="sortSettingsFalse sortElement__sortButton sortElement__sortButton--active text__h6">Data: Najbliższa</button>
          </div>


        </div>
        <div className="container container--big" id="lecture">
          {filteredWorkshops.map(workshop => <WorkshopItem workshop={workshop} />)}
        </div>
      </>
    )

  }
}
