Ext.application({
	name   : 'MyApp',
	launch : function() {
		
				
			
					
			
			
		
	
		
		Ext.create('Ext.container.Viewport', {
			id: 'viewport',		
			items: {
				xtype: 'form',
				width:500,
				items:{
					 xtype: 'filefield',
							id: 'form-file',
							emptyText: 'Select an image',
							fieldLabel: 'Attachment',
							name: 'doc',							
							buttonText: 'Browse',
							
				},
				buttons: [{
								text: 'Save',
								handler: function(){
									var form = this.up('form').getForm();
									if(form.isValid()){
										form.submit({
											url: '/upload',
											//fileUpload:true,
											method:'POST',
											headers: {'Content-Type':'multipart/form-data; charset=UTF-8'},
											waitMsg: 'Uploading your file...',
											success: function(fp, o) {
												Ext.MessageBox.alert('File Upload', 'Uploaded successfully.');
											},
											failure: function() {
												Ext.Msg.show({
															title:'Upload File',
															msg: 'Fail',
															buttons: Ext.Msg.OK,
															icon: Ext.Msg.ERROR,
															
														});
											}
										});
									}
								}
							
							}]
						
				
			}
		
		});

       } 

});
