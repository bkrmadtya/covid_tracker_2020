import React from 'react';
import { Popup } from '@urbica/react-map-gl';
import { Segment, Header, Label, List, Image } from 'semantic-ui-react';

const PopUp = ({ country, radius }) => {
  const { cases, recovered, active, deaths, countryInfo } = country;
  const { lat, long: lng, flag } = countryInfo;

  return (
    <Popup
      offset={radius / 2 + 2}
      longitude={lng}
      latitude={lat}
      closeButton={false}
      closeOnClick={false}
    >
      <Segment basic style={styles.container}>
        <List verticalAlign="middle" divided style={styles.list}>
          <List.Item>
            <List verticalAlign="middle" style={styles.list}>
              <List.Item style={styles.header}>
                <List.Content floated="left">
                  <Image style={styles.flag} bordered src={flag} />
                </List.Content>
                <List.Content floated="right">
                  <Header textAlign="right" as="h4">
                    {country.country}
                  </Header>
                </List.Content>
              </List.Item>
              <List.Item styles={styles.listItem}>
                <List.Content floated="left">
                  <Header as="h5" color="orange" style={styles.lightFont}>
                    Total cases
                  </Header>
                </List.Content>
                <List.Content floated="right">
                  <Header as="h5" color="orange" style={styles.lightFont}>
                    {cases}
                  </Header>
                </List.Content>
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <List verticalAlign="middle" style={styles.list}>
              <List.Item style={styles.listItem}>
                <Label
                  size="tiny"
                  empty
                  circular
                  color="yellow"
                  style={styles.label}
                />
                Active
                <List.Content floated="right">{active}</List.Content>
              </List.Item>
              <List.Item style={styles.listItem}>
                <Label
                  size="tiny"
                  empty
                  circular
                  color="green"
                  style={styles.label}
                />
                Recovered
                <List.Content floated="right">{recovered}</List.Content>
              </List.Item>
              <List.Item style={styles.listItem}>
                <Label
                  size="tiny"
                  empty
                  circular
                  color="grey"
                  style={styles.label}
                />
                Fatal
                <List.Content floated="right">{deaths}</List.Content>
              </List.Item>
            </List>
          </List.Item>
        </List>
      </Segment>
    </Popup>
  );
};

const styles = {
  container: {
    padding: '5px 5px 0 5px ',
    margin: 0,
  },
  header: {
    paddingBottom: 5,
  },
  flag: {
    height: '19px',
  },
  list: {
    padding: 0,
  },
  listItem: {
    fontWeight: 100,
    textAlign: 'left',
    paddingTop: '2px',
  },
  label: {
    marginRight: '10px',
  },
  lightFont: {
    fontWeight: 100,
  },
};

export default PopUp;
