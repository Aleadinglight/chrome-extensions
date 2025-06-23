chrome.runtime.onInstalled.addListener(() => {
  // Create an alarm that triggers every hour
  chrome.alarms.create('smileReminder', {
    delayInMinutes: 1,
    periodInMinutes: 1
  });

  // Create context menu items
  chrome.contextMenus.create({
    id: "muteToggle",
    // using ACII emojis as a workaround for the lack of support for emojis in context menus
    title: "🔔 Mute reminders",
    contexts: ["action"]
  });

  chrome.contextMenus.create({
    id: "showPopupNow",
    title: "Show reminder now",
    contexts: ["action"]
  });

  // Initialize mute state
  chrome.storage.local.set({ isMuted: false });
});

// Update context menu based on mute state
async function updateContextMenu() {
  const { isMuted } = await chrome.storage.local.get(['isMuted']);
  chrome.contextMenus.update("muteToggle", {
    title: isMuted ? "🔔 Unmute" : "🔕 Mute"
  });
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId === "muteToggle") {
    const { isMuted } = await chrome.storage.local.get(['isMuted']);
    const newMuteState = !isMuted;

    chrome.storage.local.set({ isMuted: newMuteState });
    updateContextMenu();
  }

  if (info.menuItemId === "showPopupNow") {
    // Open the popup programmatically
    chrome.action.openPopup();
  }
});

// Listen for alarm
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'smileReminder') {
    // Check if muted
    const { isMuted } = await chrome.storage.local.get(['isMuted']);
    if (isMuted) {
      return; // Don't show notification if muted
    }

    chrome.action.openPopup();
  }

  // Try to open popup, fallback to just showing badge
  try {
    chrome.action.openPopup();
  } catch (error) {
    console.log("Can't open popup (no active window).");
  }
});

// Update context menu when extension starts
chrome.runtime.onStartup.addListener(() => {
  updateContextMenu();
});