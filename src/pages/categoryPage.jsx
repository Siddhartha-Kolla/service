import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CategoryComponent from './categoryPageLayout';

const heroinfo = {
  heroimg: "/img/wein_hintergrund.jpg",
  heroimgClass: "",
  title: "Wein",
  titleClass: "text-white",
  button: false,
  butIcon: null,
  butTitle: null,
  butClass: "hidden",
  butHref: ""
  
}


const heroinfos = [
  {category: "water",heroimg: "/img/wasser_hintergrund.jpg",heroimgClass: "",title: "Wasser",titleClass: "",button: false,butIcon: null,butTitle: null,butClass: "hidden",butHref: ""},
  {category: "softdrinks",heroimg: "/img/softdrinks_hintergrund.png",heroimgClass: "",title: "Softdrinks",titleClass: "",button: false,butIcon: null,butTitle: null,butClass: "hidden",butHref: ""},
  {category: "beer",heroimg: "/img/bier_hintergrund.jpg",heroimgClass: "",title: "Bier",titleClass: "",button: false,butIcon: null,butTitle: null,butClass: "hidden",butHref: ""},
  {category: "juice",heroimg: "/img/saft_hintergrund.jpg",heroimgClass: "",title: "Saft",titleClass: "",button: false,butIcon: null,butTitle: null,butClass: "hidden",butHref: ""},
  {category: "warm",heroimg: "/img/warmeGetraenke_hintergrund.jpg",heroimgClass: "",title: "warme Getränke",titleClass: "",button: false,butIcon: null,butTitle: null,butClass: "hidden",butHref: ""},
  {category: "wine",heroimg: "/img/wein_hintergrund.png",heroimgClass: "",title: "Wein",titleClass: "",button: false,butIcon: null,butTitle: null,butClass: "hidden",butHref: ""},
]

const CategoryComponentManager = () => {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (!params.categorySort) {
      navigate("/")
    }
    else if (heroinfos.findIndex((obj) => obj.category === params.categorySort) == -1) {
      navigate("/notfound")
    }
  },[])
  const sortHeroInfo = heroinfos[heroinfos.findIndex((obj) => obj.category === params.categorySort)]
  return (
    <CategoryComponent sort={sortHeroInfo.category} heroinfo={sortHeroInfo} />
  )
}

export default CategoryComponentManager