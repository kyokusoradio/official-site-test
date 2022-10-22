import React from 'react';
import Iframe from 'react-iframe'


export function Episodeplayer(){

    return (
        <div>
            <Iframe
                id='episodeplayer'
                url='https://embed.podcasts.apple.com/us/podcast/%E6%97%AD%E6%93%8D%E3%83%A9%E3%82%B8%E3%82%AA-%E8%96%AC%E5%91%B3%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E3%81%B5%E3%81%96%E3%81%91%E3%81%9F%E3%83%A9%E3%82%B8%E3%82%AA/id1571370763?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light'
                position='relative'
                frameborder='0'
                overflow='hidden'
                background='hidden'
                sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
                allow='autoplay *; encrypted-media *; clipboard-write'
                className='iframe'
            />
        </div>
    );
}
