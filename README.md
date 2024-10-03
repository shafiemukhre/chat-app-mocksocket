# Firework Chat

Create a simple chat window by using messages received via websocket mock.

1. In a top level App component, subscribe to `messageReceived` custom events dispatched on document and collect the messages. ✅
2. Render messages into scrollable chatbox - newest appended to the bottom. ✅
3. Keep the chatbox scrolled to the bottom unless user scrolls up. ✅
4. Allow sending user's own message. ✅
5. Fix typescript issues. ✅
6. Elaborate on performance improvements. ✅

Tips: Use context, refs and layout effects when needed.