import React, { Component } from "react";
import { FAVORITED_CARD } from "./types";


const INITIAL_STATE = {
  cards: [
    {
      id: 1,
      label: "Charizard",
      image: require('../../global/assets/img/pokemon/charizard.jpg'),
      is_favorite: false
    },
    {
      id: 2,
      label: "Empoleon",
      image: require("../../global/assets/img/pokemon/empoleon.jpg"),
      is_favorite: true
    },
    {
      id: 3,
      label: "Entei",
      image: require("../../global/assets/img/pokemon/entei.jpg"),
      is_favorite: false
    },
    {
      id: 4,
      label: "Groudon",
      image: require("../../global/assets/img/pokemon/groudon.jpg"),
      is_favorite: false
    },
    {
      id: 5,
      label: "Lugia",
      image: require("../../global/assets/img/pokemon/lugia.jpg"),
      is_favorite: true
    },
    {
      id: 6,
      label: "Salamence",
      image: require("../../global/assets/img/pokemon/salamence.jpg"),
      is_favorite: false
    },
    {
      id: 7,
      label: "Torterra",
      image: require("../../global/assets/img/pokemon/torterra.jpg"),
      is_favorite: true
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITED_CARD:
      let cards = state.cards.map(item => {
        return item.id == action.payload
          ? { ...item, is_favorite: !item.is_favorite }
          : item;
      });

      return { ...state, cards };

    default:
      return state;
  }
};
