from flask import Flask, request, jsonify

app = Flask(__name__)

games = {}


@app.route('/api/create_game', methods=['POST'])
def create_game():
    # Extract game settings from the request data
    game_settings = request.json
    
    # TODO: Implement game creation logic
    # For now, return a simple success message
    response = {
        'status': 'success',
        'message': 'Game created',
        'game_id': '12345',  # Example game_id, you'll need to generate a unique game_id
        'game_settings': game_settings
    }
    return jsonify(response)


# Join game endpoint
@app.route('/api/join_game', methods=['POST'])
def join_game():
    # Extract the game_id and player_name from the request data
    data = request.json
    game_id = data.get('game_id')
    player_name = data.get('player_name')

    # Check if the game exists
    if game_id not in games:
        return jsonify({'status': 'error', 'message': 'Game not found'}), 404

    game = games[game_id]

    # Check if the game already has two players
    if len(game['players']) >= 2:
        return jsonify({'status': 'error', 'message': 'Game is full'}), 400

    # Add the player to the game
    player = {'name': player_name}
    game['players'].append(player)

    return jsonify({'status': 'success', 'message': 'Player joined the game', 'game_id': game_id, 'player': player})

# Game state endpoint
@app.route('/api/game_state/<game_id>', methods=['GET'])
def game_state(game_id):
    # Check if the game exists
    if game_id not in games:
        return jsonify({'status': 'error', 'message': 'Game not found'}), 404

    game = games[game_id]

    # Check if both players have joined the game
    game_started = len(game['players']) == 2

    return jsonify({'status': 'success', 'game_started': game_started, 'game': game})
