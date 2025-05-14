# Stream API

## Overview
The Stream API provides endpoints for managing data streams, allowing users to create, read, update, and delete stream data.

## Endpoints
### GET /streams
- **Description**: Retrieve a list of all available streams.
- **Parameters**:
  - `limit` (number, optional): Maximum number of streams to return.
  - `offset` (number, optional): Number of streams to skip.
- **Response**: A list of stream objects.

### POST /streams
- **Description**: Create a new stream.
- **Parameters**:
  - `name` (string, required): Name of the stream.
  - `description` (string, optional): Description of the stream.
- **Response**: The created stream object.

## Request/Response Examples
### GET /streams
**Request**:
```bash
curl -X GET "http://api.example.com/streams?limit=10&offset=0"
```

**Response**:
```json
[
  {
    "id": "1",
    "name": "Stream 1",
    "description": "Description of Stream 1"
  },
  {
    "id": "2",
    "name": "Stream 2",
    "description": "Description of Stream 2"
  }
]
```

### POST /streams
**Request**:
```bash
curl -X POST "http://api.example.com/streams" -d '{"name": "New Stream", "description": "Description of New Stream"}'
```

**Response**:
```json
{
  "id": "3",
  "name": "New Stream",
  "description": "Description of New Stream"
}
```

## Error Handling
- **400 Bad Request**: Invalid input parameters.
- **404 Not Found**: Stream not found.
- **500 Internal Server Error**: Server error occurred. 