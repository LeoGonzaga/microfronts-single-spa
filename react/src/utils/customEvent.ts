interface ICustomEvent {
  name: string;
  data: any;
}

export const emitEvent = ({ name, data }: ICustomEvent) => {
  dispatchEvent(
    new CustomEvent(name, {
      detail: data,
    })
  );
};

export const listenEvent = (name, callback) => {
  window.addEventListener(name, callback);
};
