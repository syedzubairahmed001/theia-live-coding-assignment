import React from 'react';

import { BsFillDropletFill, BsCloudRain } from "react-icons/bs";
import { GiCampfire, GiNestBirds, GiModernCity } from "react-icons/gi";
import { SiWindicss } from "react-icons/si";
import { BiWater } from "react-icons/bi";
import { IoThunderstormOutline } from "react-icons/io5";
import { MdOutlineChildFriendly } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

import styles from './NatureSounds.module.css';
import AudioCard from "../../components/AudioCard/AudioCard.component";

const NatureSounds = props => {
    return <div>
        <div className={styles.soundContainer}>
        <AudioCard
          Icon={BsCloudRain}
          audioName="rain"
        />
        <AudioCard
          Icon={GiCampfire}
          audioName="campFire"
        />
        <AudioCard
          Icon={GiNestBirds}
          audioName="birds"
        />
        <AudioCard
          Icon={SiWindicss}
          audioName="wind"
        />
      </div>
      <div className={styles.soundContainer}>
        <AudioCard
          Icon={BiWater}
          audioName="waterWaves"
        />
        <AudioCard
          Icon={IoThunderstormOutline}
          audioName="thunder"
        />
        <AudioCard
          Icon={GiModernCity}
          audioName="cityRoad"
        />
        <AudioCard
          Icon={IoIosPeople}
          audioName="children"
        />
      </div>
    </div>
}

export default NatureSounds;