# Expo Image Component: Cached Image Loading Issue on Android

This repository demonstrates a bug in the Expo `Image` component where cached images, particularly on Android, fail to load correctly.  The issue seems to be related to how Expo interacts with the browser's caching mechanism for image URIs. The `bug.js` file contains a reproduction of the problem; `bugSolution.js` offers a potential workaround.

## Bug Reproduction

The `bug.js` file shows how to reproduce the issue.  It loads an image via a URI that's likely to be cached.  Observe the image loading behavior, especially on an Android device.  The image may fail to load even when a fresh URI is provided.

## Solution

The `bugSolution.js` file offers a potential workaround. It uses a unique query parameter appended to the image URI to force the browser to download the image again, thereby bypassing the cache. This ensures the image is always retrieved from the source.

## How to Run

1. Clone this repository.
2. Navigate to the repository in your terminal.
3. Run `expo start` to launch the Expo development environment.
4. Observe the behavior of the image loading in both `bug.js` and `bugSolution.js`. 