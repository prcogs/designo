<?php
// Functions.php
add_action('graphql_register_types', function () {

	register_graphql_mutation('createFormContact', [
		'inputFields' => [
			'name' => [
				'type' => 'String',
				'description' => 'User Name',
			],
			'email' => [
				'type' => 'String',
				'description' => 'User Email',
			],
			'phone_number' => [
				'type' => 'String',
				'description' => 'User Phone Number',
			],
			'message' => [
				'type' => 'String',
				'description' => 'User Message',
			],
		],
		'outputFields' => [
			'success' => [
				'type' => 'Boolean',
				'description' => 'Whether or not data was stored successfully',
				'resolve' => function ($payload, $args, $context, $info) {
					return isset($payload['success']) ? $payload['success'] : null;
				}
			],
			'data' => [
				'type' => 'String',
				'description' => 'Payload of submitted fields',
				'resolve' => function ($payload, $args, $context, $info) {
					return isset($payload['data']) ? $payload['data'] : null;
				}
			]
		],
		'mutateAndGetPayload' => function ($input, $context, $info) {

			if (!class_exists('ACF')) return [
				'success' => false,
				'data' => 'ACF is not installed'
			];

			$sanitized_data = [];
			$errors = [];
			$acceptable_fields = [
				'name' => 'field_609a8e9d7bb71',
				'email' => 'field_609a8eb97bb72',
				'phone_number' => 'field_609a8ecf7bb73',
				'message' => 'field_609a8ef77bb74',
			];

			foreach ($acceptable_fields as $field_key => $acf_key) {
				if (!empty($input[$field_key])) {
					$sanitized_data[$field_key] = sanitize_text_field($input[$field_key]);
				} else {
					$errors[] = $field_key . ' was not filled out.';
				}
			}

			if (!empty($errors)) return [
				'success' => false,
				'data' => $errors
			];

			$form_contact = wp_insert_post([
				'post_type' => 'form_contact',
				'post_title' => $sanitized_data['name'] . ' / ' . $sanitized_data['email'],
			], true);

			if (is_wp_error($form_contact)) return [
				'success' => false,
				'data' => $form_contact->get_error_message()
			];

			foreach ($acceptable_fields as $field_key => $acf_key) {
				update_field($acf_key, $sanitized_data[$field_key], $form_contact);
			}

			return [
				'success' => true,
				'data' => json_encode($sanitized_data)
			];

		}
	]);

});