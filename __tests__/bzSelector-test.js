/** @jsx React.DOM */
jest.dontMock('../client/components/bzSelector.react');

var React = require('react/addons');
var bzSelector = require('../client/components/bzSelector.react');
var TestUtils = React.addons.TestUtils;

describe('bzSelector', function() {
 it('should call the callback on a click', function() {
  var mockClickHandler = jest.genMockFunction();

  var selector = TestUtils.renderIntoDocument(
    <bzSelector onClick={mockClickHandler} />
    );
  var button = TestUtils.findRenderedDOMComponentWithTag(selector, "button");
  TestUtils.Simulate.click(button);

  expect(mockClickHandler.mock.calls.length).toEqual(1);
 });

 it('should have a disabled css class if it is disabled', function() {
  var mockClickHandler = jest.genMockFunction();
  var selector = TestUtils.renderIntoDocument(
    <bzSelector onClick={mockClickHandler} disabled="true" />
    );
  var button = TestUtils.findRenderedDOMComponentWithTag(selector, "button");

   expect(button.getDOMNode().className).toMatch(/is-disabled/);
 });
});