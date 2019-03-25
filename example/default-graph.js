const DEFAULT_GRAPH = {
  "root": "0",
  "cells": {
    "0": {
      "id": "0"
    },
    "1": {
      "parent": "0"
    },
    "2": {
      "value": "Hello,",
      "geometry": {"x": 20, "y": 20, "width": 80, "height": 30, "relative": false, "offset": null},
      "vertex": true,
      "parent": "1",
      "style": {classes: [], styles: {}}
    },
    "3": {
      "value": "World!",
      "geometry": {"x": 200, "y": 150, "width": 80, "height": 30, "relative": false, "offset": null},
      "vertex": true,
      "parent": "1",
      "style": {classes: [], styles: {}}
    },
    "4": {
      "value": "",
      "geometry": {"x": 0, "y": 0, "width": 0, "height": 0, "relative": true, "offset": null},
      "edge": true,
      "parent": "1",
      "source": "2",
      "target": "3",
      "style": {classes: [], styles: {}}
    }
  }
};