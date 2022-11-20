import React from 'react';

const Switcher = props => {

    const [soundType, setSoundType] = React.useState('nature');

    const switchToNature = () => {
        setSoundType('nature');
    }    

    const switchToLofi = ()=>{
        setSoundType('lofi');
    }
    return <div>
        <div>

        <button onClick={switchToNature}>Nature Sounds</button>
        <button onClick={switchToLofi}>Lofi Music</button>
        </div>
        {
            soundType === 'nature' && props.NatureSounds
        }
        {
            soundType === 'lofi' && props.LofiSounds
        }
    </div>
}

export default Switcher;