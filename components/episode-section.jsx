import styles from "styles/episode.module.css"

import { Episodeplayer } from "components/episode-player"
import { PlatformList } from "components/platform-list"

export default function EpisodeSection() {
  return (
    <section className={styles.episodesContainer}>
        <h2 className={styles.episodesTitle}>
          <span className={styles.episodesTitle__main}>Episodes</span><br></br>
          <span className={styles.episodesTitle__sub}>エピソード</span>
        </h2>
        <div className={styles.episodePlayer}>
          <Episodeplayer />
        </div>
        <div className={styles.alsoListen}>
          <h3 className={styles.alsoListen__title}>You Can Also Listen</h3>
          <p className={styles.alsoListen__subtitle}>視聴可能なプラットフォーム</p>
          <div className={styles.listWrap}>
            <PlatformList />
          </div>
        </div>
      </section>
  )
}