DOM_CL(function(){
	let btnSumar = document.querySelector('#sumar'),
		btnRestar = document.querySelector('#restar'),
		btnMultiplicar = document.querySelector('#multiplicar'),
		btnDividir = document.querySelector('#dividir');

	function sumar(num1, num2){
		return Number(num1) + Number(num2);
	};

	function restar(num1, num2){
		return Number(num1) - Number(num2);
	};

	function multiplicar(num1, num2){
		return Number(num1) * Number(num2);
	};

	function dividir(num1, num2){
		return Number(num1) / Number(num2);
	};

	function inputWriteEffect(input){
		setEvent(input, 'keydown', function(){
			input.className = 'input input-active';
		});

		setEvent(input, 'keyup', function(){
			function quitarClaseActive(){
				input.className = 'input';
			}
			quitarClaseActive();
		})
	}

	click(btnSumar, function(){
		let input1 = createNode('input'),
			input2 = createNode('input');

		if (selectNode('#form').innerHTML == ""){
			appendNode(input1, selectNode('#form'));
			appendNode(input2, selectNode('#form'));

			setClass(input1, 'input');
			setClass(input2, 'input');

			inputWriteEffect(input1);
			inputWriteEffect(input2);

			att(input1, 'placeholder', 'Escribe un número');
			att(input2, 'placeholder', 'Escribe otro número');

			let br1 = createNode('br');
			let br2 = createNode('br');

			appendNode(br1, selectNode('#form'));
			appendNode(br2, selectNode('#form'));

			let btnS = createNode('button', 'Sumar'),
				btnCancel = createNode('button', 'Cancelar');

			setClass(btnS, 'btn btn-primary');
			setClass(btnCancel, 'btn btn-primary');

			appendNode(btnS, selectNode('#form'));
			appendNode(btnCancel, selectNode('#form'));

			click(btnS, function(){
				if (input1.value == "" || input2.value == ""){
					alert("Ingrese carácteres válidos en los inputs de suma");
				}else{
					let result = sumar(input1.value, input2.value),
						textResult = "Tu resultado es: " + result;

					let inputResult = selectNode('#result');
					inputResult.value = textResult;

					deleteNode(input1, selectNode('#form'));
					deleteNode(input2, selectNode('#form'));
					deleteNode(br1, selectNode('#form'));
					deleteNode(br2, selectNode('#form'));
					deleteNode(btnS, selectNode('#form'));
					deleteNode(btnCancel, selectNode('#form'));
				};
			});
			click(btnCancel, function(){
				deleteNode(input1, selectNode('#form'));
				deleteNode(input2, selectNode('#form'));
				deleteNode(br1, selectNode('#form'));
				deleteNode(br2, selectNode('#form'));
				deleteNode(btnS, selectNode('#form'));
				deleteNode(btnCancel, selectNode('#form'));
			});
		};
	});

	click(btnRestar, function(){
		let input1 = createNode('input'),
			input2 = createNode('input');

		if (selectNode('#form').innerHTML == ""){
			appendNode(input1, selectNode('#form'));
			appendNode(input2, selectNode('#form'));

			setClass(input1, 'input');
			setClass(input2, 'input');

			inputWriteEffect(input1);
			inputWriteEffect(input2);

			att(input1, 'placeholder', 'Escribe un número');
			att(input2, 'placeholder', 'Escribe otro número');

			let br1 = createNode('br');
			let br2 = createNode('br');

			appendNode(br1, selectNode('#form'));
			appendNode(br2, selectNode('#form'));

			let btnR = createNode('button', 'Restar'),
				btnCancel = createNode('button', 'Cancelar');

			setClass(btnR, 'btn btn-primary');
			setClass(btnCancel, 'btn btn-primary');

			appendNode(btnR, selectNode('#form'));
			appendNode(btnCancel, selectNode('#form'));

			click(btnR, function(){
				if (input1.value == "" || input2.value == ""){
					alert("Ingrese carácteres válidos en los inputs de resta");
				}else{
					let result = restar(input1.value, input2.value),
						textResult = "Tu resultado es: " + result;

					let inputResult = selectNode('#result');
					inputResult.value = textResult;

					deleteNode(input1, selectNode('#form'));
					deleteNode(input2, selectNode('#form'));
					deleteNode(br1, selectNode('#form'));
					deleteNode(br2, selectNode('#form'));
					deleteNode(btnR, selectNode('#form'));
					deleteNode(btnCancel, selectNode('#form'));
				};
			});
			click(btnCancel, function(){
				deleteNode(input1, selectNode('#form'));
				deleteNode(input2, selectNode('#form'));
				deleteNode(br1, selectNode('#form'));
				deleteNode(br2, selectNode('#form'));
				deleteNode(btnR, selectNode('#form'));
				deleteNode(btnCancel, selectNode('#form'));
			});
		};
	});

	click(btnMultiplicar, function(){
		let input1 = createNode('input'),
			input2 = createNode('input');

		if (selectNode('#form').innerHTML == ""){
			appendNode(input1, selectNode('#form'));
			appendNode(input2, selectNode('#form'));

			setClass(input1, 'input');
			setClass(input2, 'input');

			inputWriteEffect(input1);
			inputWriteEffect(input2);

			att(input1, 'placeholder', 'Escribe un número');
			att(input2, 'placeholder', 'Escribe otro número');

			let br1 = createNode('br');
			let br2 = createNode('br');

			appendNode(br1, selectNode('#form'));
			appendNode(br2, selectNode('#form'));

			let btnM = createNode('button', 'Multiplicar'),
				btnCancel = createNode('button', 'Cancelar');

			setClass(btnM, 'btn btn-primary');
			setClass(btnCancel, 'btn btn-primary');

			appendNode(btnM, selectNode('#form'));
			appendNode(btnCancel, selectNode('#form'));

			click(btnM, function(){
				if (input1.value == "" || input2.value == ""){
					alert("Ingrese carácteres válidos en los inputs de multiplicación");
				}else{
					let result = multiplicar(input1.value, input2.value),
						textResult = "Tu resultado es: " + result;

					let inputResult = selectNode('#result');
					inputResult.value = textResult;

					deleteNode(input1, selectNode('#form'));
					deleteNode(input2, selectNode('#form'));
					deleteNode(br1, selectNode('#form'));
					deleteNode(br2, selectNode('#form'));
					deleteNode(btnM, selectNode('#form'));
					deleteNode(btnCancel, selectNode('#form'));
				};
			});
			click(btnCancel, function(){
				deleteNode(input1, selectNode('#form'));
				deleteNode(input2, selectNode('#form'));
				deleteNode(br1, selectNode('#form'));
				deleteNode(br2, selectNode('#form'));
				deleteNode(btnM, selectNode('#form'));
				deleteNode(btnCancel, selectNode('#form'));
			});
		};
	});

	click(btnDividir, function(){
		let input1 = createNode('input'),
			input2 = createNode('input');

		if (selectNode('#form').innerHTML == ""){
			appendNode(input1, selectNode('#form'));
			appendNode(input2, selectNode('#form'));

			setClass(input1, 'input');
			setClass(input2, 'input');

			inputWriteEffect(input1);
			inputWriteEffect(input2);

			att(input1, 'placeholder', 'Escribe un número');
			att(input2, 'placeholder', 'Escribe otro número');

			let br1 = createNode('br');
			let br2 = createNode('br');

			appendNode(br1, selectNode('#form'));
			appendNode(br2, selectNode('#form'));

			let btnD = createNode('button', 'Dividir'),
				btnCancel = createNode('button', 'Cancelar');

			setClass(btnD, 'btn btn-primary');
			setClass(btnCancel, 'btn btn-primary');

			appendNode(btnD, selectNode('#form'));
			appendNode(btnCancel, selectNode('#form'));

			click(btnD, function(){
				if (input1.value == "" || input2.value == ""){
					alert("Ingrese carácteres válidos en los inputs de división");
				}else{
					let result = dividir(input1.value, input2.value),
						textResult = "Tu resultado es: " + result;

					let inputResult = selectNode('#result');
					inputResult.value = textResult;

					deleteNode(input1, selectNode('#form'));
					deleteNode(input2, selectNode('#form'));
					deleteNode(br1, selectNode('#form'));
					deleteNode(br2, selectNode('#form'));
					deleteNode(btnD, selectNode('#form'));
					deleteNode(btnCancel, selectNode('#form'));
				};
			});
			click(btnCancel, function(){
				deleteNode(input1, selectNode('#form'));
				deleteNode(input2, selectNode('#form'));
				deleteNode(br1, selectNode('#form'));
				deleteNode(br2, selectNode('#form'));
				deleteNode(btnD, selectNode('#form'));
				deleteNode(btnCancel, selectNode('#form'));
			});
		};
	});

	let inputResult = selectNode("#result");

	inputWriteEffect(inputResult);

	selectNode('#result').value = "";

	let btnLimpiar = selectNode('#limpiar');

	click(btnLimpiar, function(){
		inputResult.value = "";
	});

	console.log('The all nodes, in this page, has been loaded successfully');
});