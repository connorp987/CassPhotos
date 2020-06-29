import React from 'react';
import Heading from '../heading/Heading';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Return from '../return/Return';
import styles from './SinglePhoto.module.scss';
import { getPhotoById, getFileByPath } from '../../helpers/photos';

export default function SinglePhoto(props) {

    const photo = getPhotoById(props.data.id);
    const src = getFileByPath(photo.src);
    const meta = photo.meta;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Breadcrumb />

                <Heading tag="h2">
                    {(meta.iptc && meta.iptc.headline) ?
                        meta.iptc.headline : photo.name
                    }
                </Heading>
            </div>

            <img src={src} className={styles.image} alt="" />

            {(meta.iptc && meta.iptc.caption) && 
                <p className={styles.caption}>{meta.iptc.caption}</p>
            }

            <Return />
        </div>
    );
}
