The solution involves appending a unique query parameter to the image URI to force a re-download.  This bypasses the browser's cache.

```javascript
import { Image } from 'expo-image';

const imageUri = 'YOUR_IMAGE_URI';

// Add a unique query parameter to bypass cache
const updatedUri = `${imageUri}?${Date.now()}`;

<Image source={{ uri: updatedUri }} style={{ width: 200, height: 200 }} />
```

Replace `YOUR_IMAGE_URI` with your actual image URI.  The `Date.now()` function provides a unique timestamp for each render, ensuring a fresh download every time.