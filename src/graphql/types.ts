export type ProfileGraphType = {
  perfil: {
    data: {
      attributes: {
        profile: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        imgWidth: string;
      };
    };
  };
};

export type SlidersGraphType = {
  sliders: {
    data: SliderType[];
  };
};

export type SliderType = {
  attributes: {
    title: string;
    subtitle: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    description: string;
    endMessage: string;
    bottomMessage: string;
    endDateToCalc: string;
  };
};

export type CourseGraphType = {
  curso: {
    data: {
      attributes: {
        course: string;
        description: string;
        finalConsider: string;
      };
    };
  };
};

export type SchedulerType = {
  attributes: {
    Date: string;
    Name: string;
    Email: string;
    SmartphoneNumber: string;
    Service: string;
  };
};

export type SchedulersType = {
  schedulers: {
    data: SchedulerType[];
  };
};

export type OfferType = {
  attributes: {
    firstArgument: string;
    secondArgument: string;
    thirdArgument: string;
  };
};
export type OffersType = {
  offers: {
    data: OfferType[];
  };
};
