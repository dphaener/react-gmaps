jest.dontMock('../polygon');

describe('Polygon', () => {

  let React = require('react/addons');
  let TestUtils = React.addons.TestUtils;
  let Marker = require('../polygon');

  let polygon;

  beforeEach(() => {
    window.google = {
      maps: {
        Polygon: jest.genMockFunction(),
        LatLng: jest.genMockFunction()
      }
    };
    polygon = TestUtils.renderIntoDocument(
      <Polygon />
    );
  });

  it('creates a polygon', () => {
    expect(window.google.maps.Polygon).toBeCalled();
  });

  it('creates a polygon once', () => {
    polygon.render();
    expect(window.google.maps.Polygon.mock.calls.length).toBe(1);
  });

});
