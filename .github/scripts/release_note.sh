#!/bin/bash

# Parameters passed to the script
TAG=$1
REPO=$2
ACTOR=$3
WEBHOOK_URL=$4

# Create the repository URL
REPO_URL="https://github.com/$REPO"

# Build the Message Card payload
PAYLOAD=$(cat <<EOF
{
  "@type": "MessageCard",
  "@context": "http://schema.org/extensions",
  "themeColor": "0076D7",
  "summary": "GitHub Release Notification",
  "sections": [{
      "activityTitle": "🚀 **New Release: [$REPO]($REPO_URL) $TAG** 🚀",
      "activitySubtitle": "Released by [$ACTOR](https://github.com/$ACTOR)",
    },
    {
      "text": "🔗 **[View Repository]($REPO_URL)**"
    }
  ]
}
EOF
)

# Send the payload to Teams
curl -H "Content-Type: application/json" -d "$PAYLOAD" "$WEBHOOK_URL"
