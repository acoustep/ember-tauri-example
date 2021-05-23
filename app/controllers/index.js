import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { invoke } from '@tauri-apps/api/tauri'

export default class IndexController extends Controller {
	@tracked buttonText = 'Ping'
	@action
	checkRust() {
		invoke('my_custom_command', { currentText: this.buttonText }).then(resp => {
			console.log(resp)
			this.buttonText = resp
		})
	}
}
