interface Cast {
  role: string;
  name: string;
}

export interface EventModel {
  id: number;
  title: string;
  type: string;
  captionText: string;
  shortDescription: string;
  description: string;
  thumbnailImage: string;
  previewImage: string;
  info: string;
  cast: Array<Cast>;
  creatives: Array<Cast>;
}

export type TRoutes = Array<TRoute>;

export type TRoute = {
  navMenuScreenName: string;
  SvgIconActiveComponent: any;
  SvgIconInActiveComponent: any;
  navMenuTitle: string;
  position: number;
  isDefault: boolean;
  ScreenComponent: React.FC<any>;
};

export type TEventContainer = {
  id: string;
  last_publication_date: string;
  data: TEvent;
};

export type TEvent = {
  vs_title: Array<TVSTitle>;
  vs_videos: Array<TVSVideo>;
  vs_event_details: TVSEventDetails;
  vs_start_time: string;
  vs_end_time: string;
  vs_event_card_primary_cta_text: null | any; // need better type;
  vs_event_card_primary_cta_link: {
    link_tytpe: string;
  };
  vs_description: TVSDescription;
  vs_price_details: null | any; // need better type;
  vs_guidance: null | any; // need better type;
  vs_guidance_details: Array<any>; // need better type;
  vs_running_time_summary: null | any; // need better type;
  vs_recorded_date: null | any; // need better type;
  vs_support_text: Array<any>; // need better type;
  vs_short_creatives_summary: Array<TVSShortCreativesSummary>;
  vs_background: Array<{
    vs_background_text: Array<any>;
    vs_background_image: TVSBackgroundImage;
  }>;
  vs_background_bottom_image: TVSBackgroundImage;
  vs_subtags: Array<{ tag: string }>; //example Popular opera
  vs_labels: Array<{ tag: string }>; //example Available soon
  vs_genres: Array<{ tag: string }>; //example Romance
  vs_behind_the_scenes: Array<any>; // need better type;
};

export type TVSTitle = {
  type: string;
  text: string;
  spans: Array<any>; // need better type;
};

export type TVSVideo = {
  video: {
    id: string;
    link_type: string;
    isBroken: boolean;
  };
};

export type TVSEventDetails = {
  slug: string;
  title: string; // can be with HTML Tags
  startTime: string;
  endTime: string;
  shortDescription: string;
  tags: Array<TVSEventDetailsTag>;
  runningTimeSummary: null | any; // need better type;
  guidance: null | any; //need better type;
  guidanceDetails: string;
  cast: Array<TVSEventDetailsCast>;
  creatives: Array<TVSEventDetailsCreative>;
  productions: Array<TVSEventDetailsProduction>;
  reviews: Array<any>; // need better type;
  ticketPriceDetails: null | any; //need better type
};

export type TVSEventDetailsTag = {
  id: string;
  type: string;
  attributes: Array<{ title: string }>;
  relationships: Partial<{}>; // need better type;
};

export type TVSEventDetailsCast = {
  id: string; // example <h4>cendrillon-(cinderella)-(2011)<h4>-cast-0
  type: string;
  attributes: {
    role: string;
    name: string;
    slug: null | any; //need better type;
    isHiddenOnEventDetails: boolean;
    relationships: {
      production: {
        data: {
          id: string; //example "<h4>cendrillon-(cinderella)-(2011)<h4>"
          type: string;
        };
      };
    };
  };
};

export type TVSEventDetailsCreative = {
  id: string; //example "<h4>cendrillon-(cinderella)-(2011)<h4>-creative-0
  type: string;
  attributes: {
    id: string; //example "<h4>cendrillon-(cinderella)-(2011)<h4>-creative-0
    role: string;
    name: string;
    slug: null | any; // need better type;
    isHiddenOnEventDetails: boolean;
    relationships: Partial<{}>; // need better type;
  };
};

export type TVSEventDetailsProduction = {
  id: string; //"<h4>cendrillon-(cinderella)-(2011)<h4>"
  type: string;
  attributes: {
    title: string; // can be with HTML tags;
    language: string;
    synopsis: string; // can be with HTML tags;
    galleryImages: Array<Partial<{}>>; // need better type;
    synopsisImage: {
      desktopPath: string | null; //img url
      mobilePath: string | null; // img url;
      thumbPath: string | null; // img url;
      altText: string | null; // need better type;
      caption: string | null; // need better type;
    };
    castListCreditsTitle: string; // example CREDITS
    castListCastTitle: string; // example CAST
    castListSynopsisTitle: string; // example SYNOPSIS;
    castListSynopsisText: string; //can be with HTML tags
    castListProductionCreditsTitle: string; //example PRODUCTION CREDITS
    castListProductionExtraDetails: string;
    castListCastDetails: string;
  };
  realtionships: {
    cast: {
      data: Array<{
        id: string;
        type: string;
      }>;
    };
    creatives: {
      data: Array<{
        id: string;
        type: string;
      }>;
    };
    tags: {
      data: Array<Partial<{}>>; // need better type;
    };
  };
};

export type TVSDescription = {
  type: string;
  text: string;
  spans: Array<{ start: number; end: number; type: string }>;
};

export type TVSShortCreativesSummary = {} & TVSDescription;

export type TVSBackgroundImage = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: null | any; // need better type;
  copyright: null | any; // need better type;
  url: string;
};

export type TBitMovinPlayerSavedPosition = {
  id: string;
  position: string;
  eventId?: string;
};

export type TEventVideo = {
  id: string;
  video_type: 'performance' | 'trailer' | 'behind_the_scenes';
  performanceVideoURL: string;
};