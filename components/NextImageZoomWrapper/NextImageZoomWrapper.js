import React, { useState } from 'react'
import Image from 'next/image'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const NextImageZoomWrapper = (props) => {

    const [Zoom, SetZoom] = useState(false)

    return (
        <div onDoubleClick={() => SetZoom(!Zoom)}>
            <TransformWrapper
                minScale={1}
                maxScale={2}
                wheel={{ wheelDisabled: true }}
                doubleClick={{ mode: Zoom ? 'zoomOut' : 'zoomIn' }}
            >
                <TransformComponent>
                    <Image
                        src={props.src}
                        alt={props.alt}
                        placeholder="blur"
                        priority={props.priority}
                        height={props.height}
                        width={props.width}
                        className={props.className}
                    />
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default NextImageZoomWrapper
