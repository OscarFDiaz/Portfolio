/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ArrowExternal } from '../assets/icons/ArrowExternal';
import { designsItems, worksItems } from '../helpers/json/';
import { SectionTitle, SectionSubtitle } from '../components/';
import { WorkInfo, WorkTags, WorkButton, WorkPicture } from '../components/Works/';

import i18n from '../lang/i18n';
import { useTranslation } from 'react-i18next';
enum buttonType {
  Behance = 'Behance',
  More = 'View_More',
  Github = 'Github',
  Live = 'Live',
}

interface Props {
  className: string;
}

export const SectionWorks = ({ className }: Props) => {
  const widthOutput = window.screen.width;
  const lang: string = i18n.language || 'en';

  const { t } = useTranslation();

  return (
    <section className={`works ${className}`} id="works">
      <SectionTitle title={t('Works')} />
      <SectionSubtitle title={t('frontend_title')} style={{ padding: '3rem 0 2rem' }} />
      <div className="works__container">
        {/* Only show 2 items if the user joins as mobile user */}
        {widthOutput > 768
          ? worksItems.map((work, i) => {
              return (
                <div className="works__work" key={i}>
                  <WorkPicture work={work.img} />
                  <div className="work__data">
                    <WorkInfo name={work.name} description={work.description[lang]} />
                    <WorkTags work={work} />
                    <div className="work__buttons">
                      <WorkButton work={work.anchor_live} button={buttonType.Live} />
                      <WorkButton work={work.anchor_github} button={buttonType.Github} />
                    </div>
                  </div>
                </div>
              );
            })
          : worksItems.slice(0, 2).map((work, i) => {
              return (
                <div className="works__work" key={i}>
                  <WorkPicture work={work.img} />
                  <div className="work__data">
                    <WorkInfo name={work.name} description={work.description[lang]} />
                    <WorkTags work={work} />
                    <div className="work__buttons">
                      <WorkButton work={work.anchor_live} button={buttonType.Live} />
                      <WorkButton work={work.anchor_github} button={buttonType.Github} />
                    </div>
                  </div>
                </div>
              );
            })}

        {/* SEE ALL button */}
        <a
          className="works__empty"
          href="https://github.com/OscarFDiaz"
          rel="noopener noreferrer"
          target="_blank"
          title={t('toGithub')}
        >
          <h2 className="empty__title">{t('see_all')}</h2>
          <ArrowExternal />
        </a>
      </div>

      {/* DESIGNS */}
      <SectionSubtitle title={t('design_title')} style={{ padding: '3rem 0 2rem' }} />
      <div className="works__container">
        {widthOutput > 768
          ? designsItems.map((design, i) => (
              <div className="works__work" key={i}>
                <WorkPicture
                  work={design.img}
                  className="work__picture--design"
                  imgClass="work__image--design"
                />
                <div className="work__data">
                  <WorkInfo name={design.name} />
                  <WorkTags work={design} />
                  <div className="work__buttons">
                    <WorkButton work={design.anchor_behance} button={buttonType.More} />
                  </div>
                </div>
              </div>
            ))
          : designsItems.slice(0, 2).map((design, i) => (
              <div className="works__work" key={i}>
                <WorkPicture
                  work={design.img}
                  className="work__picture--design"
                  imgClass="work__image--design"
                />
                <div className="work__data">
                  <WorkInfo name={design.name} />
                  <WorkTags work={design} />
                  <div className="work__buttons">
                    <WorkButton work={design.anchor_behance} button={buttonType.More} />
                  </div>
                </div>
              </div>
            ))}

        {/* SEE ALL button */}
        <a
          className="works__empty"
          href="https://www.behance.net/oscarofda"
          rel="noopener noreferrer"
          target="_blank"
          title={t('toBehance')}
        >
          <h2 className="empty__title">{t('see_all')}</h2>
          <ArrowExternal />
        </a>
      </div>
    </section>
  );
};
