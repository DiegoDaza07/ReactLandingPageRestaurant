import './mapComponent.css';
import React from 'react';

interface MapComponentProps {
    address: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ address }) => {
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

    return (
        <div className='map-component-container'>
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                src={mapUrl}
            />
        </div>
    );
};

export default MapComponent;
