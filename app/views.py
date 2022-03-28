from django.shortcuts import get_object_or_404
from rest_framework import serializers
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from rest_framework.response import Response
from .models import Contact

@api_view(['GET'])
def api_endpoints(request):
    api_urls = {
        'contact_list': '/',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/contact/pk/delete'
    }
  
    return Response(api_urls)

@api_view(['POST'])
def create_contact(request):
	contact = ContactSerializer(data=request.data)

	if contact.is_valid():
		contact.save()
		return Response(contact.data)
	else:
		return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def view_contacts(request):
	
	# checking for the parameters from the URL
	if request.query_params:
		contacts = Contact.objects.filter(**request.query_param.dict())
	else:
		contacts = Contact.objects.all()

	# if there is something in contacts else raise error
	if contacts:
		data = ContactSerializer(contacts)
		return Response(data)
	else:
		return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def update_contacts(request, pk):
    contact = Contact.objects.get(pk=pk)
    data = ContactSerializer(instance=contact, data=request.data)
  
    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_items(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    contact.delete()
    return Response(status=status.HTTP_202_ACCEPTED)