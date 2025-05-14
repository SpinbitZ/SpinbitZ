# API Template

## Overview
Brief description of the API and its purpose.

## Endpoints
### GET /endpoint
- **Description**: Brief description of the endpoint.
- **Parameters**:
  - `param1` (string, required): Description of param1.
  - `param2` (number, optional): Description of param2.
- **Response**: Description of the response.

### POST /endpoint
- **Description**: Brief description of the endpoint.
- **Parameters**:
  - `param1` (string, required): Description of param1.
  - `param2` (number, optional): Description of param2.
- **Response**: Description of the response.

## Request/Response Examples
### GET /endpoint
**Request**:
```bash
curl -X GET "http://api.example.com/endpoint?param1=value1&param2=value2"
```

**Response**:
```json
{
  "key": "value"
}
```

### POST /endpoint
**Request**:
```bash
curl -X POST "http://api.example.com/endpoint" -d '{"param1": "value1", "param2": 123}'
```

**Response**:
```json
{
  "key": "value"
}
```

## Error Handling
- **400 Bad Request**: Description of the error.
- **404 Not Found**: Description of the error.
- **500 Internal Server Error**: Description of the error. 