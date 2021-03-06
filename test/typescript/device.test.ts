import {device} from 'tabris';

// Properties
let language: string;
let model: string;
let orientation: 'landscape-primary' | 'landscape-secondary' | 'portrait-primary' | 'portrait-secondary';
let platform: 'Android' | 'iOS' | 'windows';
let scaleFactor: number;
let screenHeight: number;
let screenWidth: number;
let version: string;

language = device.language;
model = device.model;
orientation = device.orientation;
platform = device.platform;
scaleFactor = device.scaleFactor;
screenHeight = device.screenHeight;
screenWidth = device.screenWidth;
version = device.version;

// Events
device.on({
  orientationChanged: event => orientation = event.value
});
