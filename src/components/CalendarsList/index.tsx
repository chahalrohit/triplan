import React from 'react';
import {Text, View, Colors} from 'react-native-ui-lib';
import {CalendarList, DateObject} from 'react-native-calendars';
import {FONTS} from 'config/FoundationConfig';

const getDateForCalendar = (date: Date): string => {
  const yr = date.getFullYear();
  const month = `${date.getMonth() + 1 < 10 ? 0 : ''}${date.getMonth() + 1}`;
  const d = `${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
  return `${yr}-${month}-${d}`;
};
const getAllDatesBetween = (fromDate: Date, toDate: Date) => {
  let curDate = new Date(fromDate.getTime());
  const datesForCalendar: any = {};
  datesForCalendar[getDateForCalendar(fromDate)] = {
    startingDay: true,
    color: Colors.cf15,
    textColor: 'white',
  };
  if (toDate) {
    while (curDate < toDate) {
      curDate = new Date(curDate.setDate(curDate.getDate() + 1));
      datesForCalendar[getDateForCalendar(curDate)] = {
        color: Colors.cf15,
        textColor: 'white',
      };
    }
    datesForCalendar[getDateForCalendar(toDate)] = {
      endingDay: true,
      color: Colors.cf15,
      textColor: 'white',
    };
  }
  return datesForCalendar;
};
interface Props {
  onChangeEndDate: (dateString: string) => void;
  onChangeStartDate: (dateString: string) => void;
}
const CalendarsList = React.memo(
  ({onChangeEndDate, onChangeStartDate}: Props) => {
    // const indexSelect = React.useRef(0); // %2 === 1 ? select end date : select start date
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const markedDates = React.useMemo(() => {
      if (!startDate) {
        return {};
      }
      return getAllDatesBetween(new Date(startDate), new Date(endDate));
    }, [startDate, endDate]);
    const onDayPress = React.useCallback(
      (day: DateObject) => {
        let {dateString} = day;
        // console.log(dateString.localeCompare(endDate));
        // if (indexSelect.current % 2 === 1) {
        //   if (dateString.localeCompare(endDate) === -1) return;
        //   setEndDate(dateString);
        //   onChangeEndDate(dateString);
        // } else {
        //   if (dateString.localeCompare(endDate) !== -1) {
        //     setEndDate('');
        //     onChangeEndDate('');
        //   }
        //   setStartDate(dateString);
        //   onChangeStartDate(dateString);
        // }
        // indexSelect.current = indexSelect.current + 1;
        console.log(dateString.localeCompare(startDate));
        if (!startDate) {
          setStartDate(dateString);
          onChangeStartDate(dateString);
          return;
        }
        if (!endDate) {
          if (dateString.localeCompare(startDate) === -1) {
            setStartDate(dateString);
            onChangeStartDate(dateString);
            return;
          }
          setEndDate(dateString);
          onChangeEndDate(dateString);
          return;
        }
        setStartDate(dateString);
        onChangeStartDate(dateString);

        setEndDate('');
        onChangeEndDate('');
        return;
      },
      [startDate, endDate],
    );
    const renderHeader = React.useCallback(date => {
      const header = date.toString('MMMM yyyy');
      const [month, year] = header.split(' ');
      return (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text B30 color35>
            {`${month}`}, {year}
          </Text>
        </View>
      );
    }, []);
    return (
      <CalendarList
        pastScrollRange={24}
        futureScrollRange={24}
        hideExtraDays={false}
        renderHeader={renderHeader}
        onDayPress={onDayPress}
        hideDayNames={true}
        markingType={'period'}
        markedDates={markedDates}
        theme={{
          'stylesheet.calendar.header': {
            dayHeader: {
              fontWeight: '600',
              color: Colors.color6D,
              fontSize: 16,
              fontFamily: FONTS.medium,
              textTransform: 'uppercase',
            },
          },
          'stylesheet.calendar-list.main': {
            calendar: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
          dayTextColor: Colors.c35,
          textDayFontFamily: FONTS.medium,
          textDayFontSize: 16,
        }}
      />
    );
  },
);

export default CalendarsList;
