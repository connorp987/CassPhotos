import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../../components/heading/Heading';
import Social from '../../components/social/Social';

import { config } from '../../data';
import styles from './About.module.scss';

export default class About extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About {config.title}</title>
                    <link rel="canonical" href="" />
                </Helmet>

                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <Heading 
                            tag="h2"
                        >
                            About {config.title}
                        </Heading>
                    </div>
                    <img className={styles.portrait} src={require('./IMG_2292.jpg')} alt="" />
                    <div className={styles.copy}>
                        <p>Hi i'm Cassidy and this is my photography collection.</p>
                        <p>Hope you enjoy! :)</p>
                    </div>
                    <Social 
                        title={"Social"}
                    />
                </div>
            </React.Fragment>
        );
    }

}