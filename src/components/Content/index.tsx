import { useNavigation, useRoute } from '@react-navigation/core';
import Routes from 'config/Routes';
import React from 'react';
import { Text } from 'react-native-ui-lib';
import CustomOptionRickText from 'components/CustomOptionRichText';
import { ImageSourcePropType } from 'react-native';
import ItemHtml from 'components/Content/ItemHtml';
import ItemPlace from 'components/Content/ItemPlace';
import ItemImages from 'components/Content/ItemImages';

export enum EType {
  text = 'text',
  place = 'place',
  placeholder = 'placeholder',
  images = 'images',
}

export interface IHtmlContent {
  type: EType;
  htmlContent?: string;
  name?: string;
  des?: string;
  img?: ImageSourcePropType;
  quote?: string;
  uri?: any;
}

const Content = React.memo(() => {
  const { navigate } = useNavigation();
  const route: any = useRoute();
  const itemPlaceHolder = React.useRef<IHtmlContent>({
    type: EType.placeholder,
    htmlContent: 'What did you do today?',
  }).current;
  const [htmlContent, setHtmlContent] = React.useState<IHtmlContent[]>([
    itemPlaceHolder,
  ]);

  React.useEffect(() => {
    let html = route?.params?.htmlContent;
    if (!html) return;
    let indexText = route?.params?.indexText;
    setHtmlContent(prev => {
      if (!!html && html !== prev[indexText]?.htmlContent) {
        let _prev = [...prev];
        _prev.pop();
        _prev[indexText] = {
          type: EType.text,
          htmlContent: html,
        };
        return _prev.concat(itemPlaceHolder);
      }
      return prev;
    });
  }, [route?.params?.htmlContent, route?.params?.indexText]);

  React.useEffect(() => {
    let place = route?.params?.place;
    if (!place) return;
    let indexPlace = route?.params?.indexPlace;
    setHtmlContent(prev => {
      let _prev = [...prev];
      _prev.pop();
      _prev[indexPlace] = {
        type: EType.place,
        name: place.name,
        des: place.des,
      };
      return _prev.concat(itemPlaceHolder);
    });
  }, [route?.params?.place, route?.params?.indexPlace]);

  React.useEffect(() => {
    let imgs = route?.params?.imgs;
    if (!imgs?.length) return;
    let index = route?.params?.index;
    setHtmlContent(prev => {
      let _prev = [...prev];
      _prev.pop();
      imgs.forEach(function (value: ImageSourcePropType | any, i: number) {
        if (value.uri) {
          _prev[index + i] = {
            type: EType.images,
            uri: value.uri,
          };
        } else {
          _prev[index + i] = {
            type: EType.images,
            img: value,
          };
        }
      });
      return _prev.concat(itemPlaceHolder);
    });
  }, [route?.params?.imgs, route?.params?.index]);
  const goWriteContent = React.useCallback(
    (index: number) => {
      navigate(Routes.WriteContent, {
        htmlContent: '',
        index,
      });
    },
    [htmlContent],
  );

  React.useEffect(() => {
    let quote = route?.params?.quote;
    if (!quote) return;
    let index = route?.params?.imgIndex;
    const _prev = [...htmlContent];
    _prev.pop();
    const newHtmlContent = _prev.map((item, idx) => {
      if (item.type === EType.images && idx === index) {
        item.quote = quote;
        return item
      } else return item
    })
    setHtmlContent([...newHtmlContent, itemPlaceHolder]);
  }, [route?.params?.quote, route?.params?.imgIndex]);

  return (
    <React.Fragment>
      {htmlContent?.map((item, index) => {
        if (item?.type === EType.placeholder) {
          return (
            <Text
              key={index}
              marginB-16
              marginT-32={htmlContent.length === 1}
              marginL-24
              D16R
              cd1
              onPress={() => goWriteContent(htmlContent.length - 1)}>
              {htmlContent.length === 1 ? 'What did you do today?' : ''}
            </Text>
          );
        }
        if (item?.type === EType.text) {
          return (
            <ItemHtml
              key={index}
              index={index}
              htmlContent={item.htmlContent || ''}
              onDelete={index => { }}
            />
          );
        }
        if (item?.type === EType.place) {
          return (
            <ItemPlace
              name={item.name || ''}
              des={item.des || ''}
              index={index}
              key={index}
              onDelete={index => {
                console.log('index', index);
              }}
            />
          );
        }
        if (item?.type === EType.images) {
          return (!!item.img || !!item.uri) && <ItemImages img={item.img} uri={item.uri} key={index} index={index} quote={item.quote} />;
        }
      })}
      <CustomOptionRickText index={htmlContent.length - 1} />
    </React.Fragment>
  );
});

export default Content;